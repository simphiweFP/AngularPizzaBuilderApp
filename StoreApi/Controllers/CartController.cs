using Microsoft.AspNetCore.Mvc;
using StoreApi.Concrete;
using StoreApi.Decorators;
using StoreApi.Models;
using StoreApi.Services;



[ApiController]
[Route("api/[controller]")]
public class CartController : ControllerBase
{
    private readonly CartService _cartService;

    public CartController(CartService cartService)
    {
        _cartService = cartService;
    }

    [HttpGet("pizzas")]
    public ActionResult<IEnumerable<PizzaDto>> GetPizzas()
    {
        var pizzas = _cartService.GetPizzas();
        return Ok(pizzas);
    }

    [HttpPost("pizzas")]
    public ActionResult AddPizza([FromBody] PizzaDto pizza)
    {
        _cartService.AddPizza(pizza);
        return Ok();
    }

    [HttpDelete("pizzas/{index}")]
    public ActionResult RemovePizza(int index)
    {
        _cartService.RemovePizza(index);
        return Ok();
    }

    [HttpDelete("clear")]
    public ActionResult ClearCart()
    {
        _cartService.ClearCart();
        return Ok();
    }
}
