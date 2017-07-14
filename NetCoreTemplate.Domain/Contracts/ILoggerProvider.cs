using System;

namespace NetCoreTemplate.Domain.Contracts
{
    public interface ILoggerProvider
    {
        void WriteCritical(string message, Exception exception);

        void WriteCritical(object message);

        void WriteError(string message, Exception exception);

        void WriteError(object message);

        void WriteWarning(string message, Exception exception);

        void WriteWarning(object message);

        void WriteInformation(string message, Exception exception);

        void WriteInformation(object message);

        void WriteDebug(string message, Exception exception);

        void WriteDebug(object message);
    }
}