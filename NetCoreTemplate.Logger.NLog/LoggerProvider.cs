using System;
using System.IO;
using System.Reflection;
using NetCoreTemplate.Domain.Contracts;
using NLog;
using NLog.Config;
using PostSharp.Patterns.Diagnostics;
using PostSharp.Patterns.Diagnostics.Backends.NLog;

namespace NetCoreTemplate.Logger.NLog
{
    public class LoggerProvider : ILoggerProvider
    {
        public LoggerProvider()
        {
            string assemblyFolder = Path.GetDirectoryName(Assembly.GetEntryAssembly().Location);
            LogManager.Configuration = new XmlLoggingConfiguration(assemblyFolder + "\\nlog.config", true);

            var nlog = new NLogLoggingBackend() { Options = { GetLogger = source => LogManager.GetLogger("Default") } };
            LoggingServices.DefaultBackend = nlog;
        }

        private readonly global::NLog.Logger _logger = LogManager.GetLogger("allfile");

        public void WriteCritical(string message, Exception exception)
        {
            _logger.Fatal(exception, message);
        }

        public void WriteCritical(object message)
        {
            _logger.Fatal(message);
        }

        public void WriteError(string message, Exception exception)
        {
            _logger.Error(exception, message);
        }

        public void WriteError(object message)
        {
            _logger.Error(message);
        }

        public void WriteWarning(string message, Exception exception)
        {
            _logger.Warn(exception, message);
        }

        public void WriteWarning(object message)
        {
            _logger.Warn(message);
        }

        public void WriteInformation(string message, Exception exception)
        {
            _logger.Info(exception, message);
        }

        public void WriteInformation(object message)
        {
            _logger.Info(message);
        }

        public void WriteDebug(string message, Exception exception)
        {
            _logger.Debug(exception, message);
        }

        public void WriteDebug(object message)
        {
            _logger.Debug(message);
        }
    }
}