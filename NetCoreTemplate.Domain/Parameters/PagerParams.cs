namespace NetCoreTemplate.Domain.Parameters
{
    public class PagerParams : Serializable
    {
        public int StartIndex { get; set; }

        public int EndIndex { get; set; }
    }
}