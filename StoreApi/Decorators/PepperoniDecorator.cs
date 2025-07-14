using StoreApi.Models;

namespace StoreApi.Decorators
{
    public class PepperoniDecorator : PizzaDecorator
    {
        public PepperoniDecorator(IPizza pizza) : base(pizza) { }

        public override string GetDescription() => _pizza.GetDescription() + ", Pepperoni";
        public override double GetCost() => _pizza.GetCost() + 1.75;
    }
}
