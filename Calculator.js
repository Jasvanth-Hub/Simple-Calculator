

let display = document.getElementById("display")

display.innerText="0"

let buttons = document.getElementsByTagName("button")

for(var i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener("click",function()
    {
        let input = this.innerText
        updateDispaly(input)
    })
}

function updateDispaly(input)
{
    let currdispaly = display.innerText
    if(currdispaly == "0")
    {
        if(input!="C" && input!="DEL" && input!="=" && input!="+" && input!="%" && input!="/" && input!="*" && input!="-" && input!=".")
        {
            display.innerText=""
            display.innerText=input
        }
        else if(input==".")
        {
            display.innerText=currdispaly+input
        }
    }
    else
    {
        if(input!="C" && input!="DEL" && input!="=" )
        {
            let o = currdispaly.length-1

            if((currdispaly[o]=="-" || currdispaly[o]=="+" || currdispaly[o]=="*" || currdispaly[o]=="/" || currdispaly[o]=="%" || currdispaly[o]==".") && (input=="-" || input=="*" || input=="/" || input=="%" || input=="+" || input=="."))
            {
                display.innerText=currdispaly
            }
            else
            {
                display.innerText=currdispaly+input
            }
        }
        else if(input=="DEL")
        {
            if(currdispaly.length==1)
            {
                display.innerText="0"
            }
            else
            {
                display.innerText=currdispaly.substring(0,currdispaly.length-1)
            }
        }
        else if(input=="C")
        {
            display.innerText="0"
        }
        else if(input=="=")
        {
            let o = currdispaly.length-1

            if(currdispaly[o]!="-" && currdispaly[o]!="+" && currdispaly[o]!="*" && currdispaly[o]!="/" && currdispaly[o]!="%" && currdispaly[o]!=".")
            {
                display.innerText=eval(currdispaly)
            }
        }
    }
}

