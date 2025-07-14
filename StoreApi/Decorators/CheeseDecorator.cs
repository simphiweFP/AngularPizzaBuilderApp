using StoreApi.Models;

namespace StoreApi.Decorators
{
    public class CheeseDecorator : PizzaDecorator
    {
        public CheeseDecorator(IPizza pizza) : base(pizza) { }

        public  string GetDescription() => _pizza.GetDescription() + ", Cheese";
        public override double GetCost() => _pizza.GetCost() + 1.25;
    }

}
