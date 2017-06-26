using System;

namespace NetCoreTemplate.Domain.DTOs
{
    public class AutofacConfiguratorDto
    {
        public IServiceProvider ServiceProvider { get; set; }

        public Action DisposeAction { get; set; }
    }
}
