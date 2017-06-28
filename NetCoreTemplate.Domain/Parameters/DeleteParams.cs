using System;
using NetCoreTemplate.Domain.ViewModels;

namespace NetCoreTemplate.Domain.Parameters
{
    public class DeleteParams : Serializable
    {
        public Guid Id { get; set; }
    }
}
