using StoreApi.Models;

namespace StoreApi.Decorators
{
    public abstract class PizzaDecorator : IPizza
    {
        protected IPizza _pizza;
        public PizzaDecorator(IPizza pizza)
        {
            _pizza = pizza;
        }

        public virtual string GetDescription() => "Plain Pizza";
        public virtual double GetCost() => 5.00; // Base cost for a plain pizza
    }
}
