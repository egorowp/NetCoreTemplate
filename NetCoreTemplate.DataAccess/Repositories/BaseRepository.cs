using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using NetCoreTemplate.Domain.Contracts;

namespace NetCoreTemplate.DataAccess.Repositories
{
    public class BaseRepository<T> : IRepository<T> where T : class, IEntity
    {
        protected IQueryable<T> BaseQuery { get; set; }

        protected DbSet<T> BaseDbSet { get; set; }

        protected DatabaseContext DataContext { get; set; }

        public BaseRepository(DatabaseContext databaseContext)
        {
            DataContext = databaseContext;
            BaseQuery = DataContext.Set<T>();
        }

        public void Reload(T entry)
        {
            DataContext.Entry(entry).Reload();
        }

        public virtual T Get(Guid id)
        {
            if (id == Guid.Empty)
            {
                return null;
            }
            return BaseDbSet.Find(id);
        }

        public virtual T Get(Guid? id)
        {
            return id.HasValue ? Get(id.Value) : null;
        }

        // find by id is necessary when you would like to get separate entity which is refer to another place in the heap.
        // when use 'Get' method it will return you previous entity from context if this entity has already gotten via this method
        public T FindById(Guid id)
        {
            return BaseDbSet.AsQueryable().AsNoTracking().FirstOrDefault(i => i.Id.Equals(id));
        }

        public virtual IEnumerable<T> GetAll()
        {
            return BaseQuery.ToArray();
        }

        public virtual Boolean Update(T entity)
        {
            if (entity.Id == Guid.Empty)
            {
                DataContext.Set<T>().Attach(entity);
                DataContext.Entry(entity).State = EntityState.Added;
            }

            try
            {
                DataContext.SaveChanges();
                return DataContext.Entry(entity).State == EntityState.Unchanged;
            }
            catch (Exception exception)
            {
                //Logger.Error(exception);
                throw;
            }
        }

        public virtual T Save(T entity)
        {
            if (entity.Id != Guid.Empty)
            {
                throw new InvalidOperationException("You try save entity with existing ID");
            }

            DataContext.Set<T>().Add(entity);
            DataContext.SaveChanges();
            DataContext.Set<T>().Attach(entity);
            return entity;
        }

        public virtual ICollection<T> SaveCollection(ICollection<T> entities)
        {
            if (entities.Any(v => v.Id != Guid.Empty))
                throw new InvalidOperationException("You try save entity with existing ID");

            DataContext.Set<T>().AddRange(entities);
            DataContext.SaveChanges();

            return entities;
        }

        public virtual void Delete(T entity, Boolean refreshContext = true)
        {
            DataContext.Set<T>().Remove(entity);
            if (refreshContext)
            {
                DataContext.SaveChanges();
            }
        }

        public virtual void DeleteRange(IEnumerable<T> range)
        {
            DataContext.Set<T>().RemoveRange(range);
            DataContext.SaveChanges();
        }

        public Boolean Any()
        {
            return DataContext.Set<T>().Any();
        }

        public override string ToString()
        {
            return String.Format("Entity: {0}", typeof(T).Name);
        }

        public Int32 SaveChanges()
        {
            return DataContext.SaveChanges();
        }
    }
}