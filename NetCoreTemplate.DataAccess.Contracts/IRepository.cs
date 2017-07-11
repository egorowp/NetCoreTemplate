﻿using System;
using NetCoreTemplate.Domain.Contracts;

namespace NetCoreTemplate.DataAccess.Contracts
{
    public interface IRepository<T> where T : class, IEntity
    {
        T Get(Guid id);

        Boolean Update(T entity);

        T Save(T entity);

        String ToString();

        Int32 SaveChanges();
    }
}