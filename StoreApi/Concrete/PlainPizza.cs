using StoreApi.Models;

namespace StoreApi.Concrete
{
    public class PlainPizza : IPizza
    {
        public string GetDescription() => "Plain Pizza";
        public double GetCost() => 5.00; 
    }
}
