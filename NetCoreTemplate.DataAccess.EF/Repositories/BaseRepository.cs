using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using NetCoreTemplate.DataAccess.Contracts.Repositories;
using NetCoreTemplate.Domain.Contracts;

namespace NetCoreTemplate.DataAccess.EF.Repositories
{
    public class BaseRepository<T> : IBaseRepository<T> where T : class, IEntity
    {
        private readonly DbSet<T> _dbSet;

        protected DatabaseContext DatabaseContext { get; set; }

        protected ILoggerProvider Logger { get; set; }

        public BaseRepository(DatabaseContext databaseContext, ILoggerProvider loggerProvider)
        {
            DatabaseContext = databaseContext;
            _dbSet = DatabaseContext.Set<T>();
            Logger = loggerProvider;
        }

        public void Reload(T entry)
        {
            DatabaseContext.Entry(entry).Reload();
        }

        public virtual T Get(Guid id)
        {
            if (id == Guid.Empty)
            {
                return null;
            }
            return _dbSet.Find(id);
        }

        public T FindById(Guid id)
        {
            return _dbSet.AsQueryable()
                .AsNoTracking()
                .FirstOrDefault(i => i.Id.Equals(id));
        }

        public virtual IQueryable<T> GetAll()
        {
            return _dbSet;
        }

        public virtual bool Update(T entity)
        {
            if (entity.Id == Guid.Empty)
            {
                throw new InvalidOperationException("You try update entity with empty ID");
            }
            try
            {
                DatabaseContext.SaveChanges();
                return DatabaseContext.Entry(entity).State == EntityState.Unchanged;
            }
            catch (Exception exception)
            {
                Logger.WriteError(exception.Message, exception);
                throw;
            }
        }

        public virtual T Add(T entity)
        {
            if (entity.Id != Guid.Empty)
            {
                throw new InvalidOperationException("You try save entity with existing ID");
            }
            try
            {
                DatabaseContext.Set<T>().Add(entity);
                DatabaseContext.SaveChanges();
                DatabaseContext.Set<T>().Attach(entity);
            }
            catch (Exception exception)
            {
                Logger.WriteError(exception.Message, exception);
                throw;
            }
            return entity;
        }

        public virtual ICollection<T> AddRange(ICollection<T> entities)
        {
            if (entities.Any(e => e.Id != Guid.Empty))
            {
                throw new InvalidOperationException("You try save entity with existing ID");
            }

            DatabaseContext.Set<T>().AddRange(entities);
            DatabaseContext.SaveChanges();

            return entities;
        }

        public virtual void Delete(T entity, bool refreshContext = true)
        {
            DatabaseContext.Set<T>().Remove(entity);
            if (refreshContext)
            {
                DatabaseContext.SaveChanges();
            }
        }

        public virtual void DeleteRange(IEnumerable<T> range)
        {
            DatabaseContext.Set<T>().RemoveRange(range);
            DatabaseContext.SaveChanges();
        }

        public bool Any()
        {
            return DatabaseContext.Set<T>().Any();
        }

        public int SaveChanges()
        {
            return DatabaseContext.SaveChanges();
        }
    }
}