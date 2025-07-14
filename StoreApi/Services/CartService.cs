using StoreApi.Models;

namespace StoreApi.Services
{
    public class CartService
    {
        private List<PizzaDto> _pizzasInCart = new List<PizzaDto>();

        public IEnumerable<PizzaDto> GetPizzas()
        {
            return _pizzasInCart;
        }

        public void AddPizza(PizzaDto pizza)
        {
            _pizzasInCart.Add(pizza);
        }

        public void RemovePizza(int index)
        {
            if (index >= 0 && index < _pizzasInCart.Count)
            {
                _pizzasInCart.RemoveAt(index);
            }
        }

        public void ClearCart()
        {
            _pizzasInCart.Clear();
        }

        public double GetTotalCost()
        {
            return _pizzasInCart.Sum(pizza => pizza.Cost);
        }
    }

}
