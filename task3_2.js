function sum(x) 
{
    return function(y) 
    {
        if (typeof y !== 'undefined') 
        {
            x = x + y;
            return arguments.callee;
        } 
        else {
            return x;
        }
    };
}
sum(1)(2)(3)();
  