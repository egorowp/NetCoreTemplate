using System;

namespace NetCoreTemplate.Domain.Parameters
{
    public class GetParams : Serializable
    {
        public Guid Id { get; set; }
    }
}