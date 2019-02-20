var arr=[
    {
    "type":'A',
    "percentage":5,
    
},
{
    "type":'B',
    "percentage":10,
    
    

},
{
    "type":'C',
    "percentage":15,
    
    
},
{
    "type":'D',
    "percentage":20,
    
    
},
{
    "type":'E',
    "percentage":25,
    
   

},
];
function calculate(type,amount){
    var deducted_amount;
    var net_amount;
    var obj;


    for(var i=0;i<arr.length;i++)
    {
        if(arr[i].type==type)
        {
            deducted_amount=(amount*arr[i].percentage)/100;
            net_amount=amount-deducted_amount;
             obj={"type": type,
                    "amount":amount,
                    "percentage":arr[i].percentage,
                    "deducted_amount":deducted_amount,
                    "net_amount":net_amount
        };
            }
            
            }
            return obj;
      
    }
    console.log(calculate('B',400))

