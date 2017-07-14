using System;
using System.Collections.Generic;
using System.Linq;
using NetCoreTemplate.Domain.Contracts;

namespace NetCoreTemplate.DataAccess.Contracts.Repositories
{
    public interface IBaseRepository<T> where T : class, IEntity
    {
        IQueryable<T> GetAll();

        T Get(Guid id);

        void Reload(T entry);

        /// <summary>
        /// find by id is necessary when you would like to get separate entity which is refer to another place in the heap.
        /// when use 'Get' method it will return you previous entity from context if this entity has already gotten via this method
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        T FindById(Guid id);

        bool Update(T entity);

        T Add(T entity);

        ICollection<T> AddRange(ICollection<T> entities);

        int SaveChanges();
    }
}