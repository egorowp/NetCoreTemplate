using System;

namespace NetCoreTemplate.Domain.Contracts
{
    /// <summary>
    /// Interface for all entities managed by repositories
    /// </summary>
    public interface IEntity
    {
        /// <summary>
        /// Unique identifier
        /// </summary>
        Guid Id { get; set; }

        String ToString();
    }
}