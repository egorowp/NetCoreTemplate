using System;

namespace NetCoreTemplate.Domain.Contracts
{
    public interface ILoggerProvider
    {
        void WriteCritical(string message, Exception exception);

        void WriteCritical(Object message);

        void WriteError(string message, Exception exception);

        void WriteError(Object message);

        void WriteWarning(string message, Exception exception);

        void WriteWarning(Object message);

        void WriteInformation(string message, Exception exception);

        void WriteInformation(Object message);

        void WriteDebug(string message, Exception exception);

        void WriteDebug(Object message);
    }
}