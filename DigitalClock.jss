function clock()
{
	var date=new Date()
	var hh=date.getHours()
	var mm=date.getMinutes()
	var ss=date.getSeconds()
	var day=date.getDay()
	var dd=date.getDate()
	var mo=date.getMonth()
	var yy=date.getFullYear()
	console.log(hh,mm,ss,day,dd,mon,yy)
	var am_pm="AM"
	if(hh>12)
	{
		am_pm="PM"
		if(hh>12)
		{
			hh=hh-12;
		}
		if(hh==0)
		{
			hh=12;
		}
		if(mon==0)
		{
			mo="Jan"
		}
		else if(mon==1)
		{
			mo="Feb"
		}
		else if(mon==2)
		{
			mo="Mar"
		}
		else if(mon==3)
		{
			mo="Apr"
		}
		else if(mon==4)
		{
			mo="May"
		}
		else if(mon==5)
		{
			mo="Jun"
		}
		else if(mon==6)
		{
			mo="Jul"
		}
		else if(mon==7)
		{
			mo="Aug"
		}
		else if(mon==8)
		{
			mo="Sep"
		}
		else if(mon==9)
		{
			mo="Oct"
		}
		else if(mon==10)
		{
			mo="Nov"
		}
		else if(mon==11)
		{
			mo="Dec"
		}
		switch(day)
		{
			case 0:day="Sunday"
			document.body,style.backgroundImage="url(./sun.jpg)"
			break;
			case 1:day="Monday"
			document.body,style.backgroundImage="url(./mon.jpg)"
			break;
			case 2:day="Tuesday"
			document.body,style.backgroundImage="url(./tue.jpg)"
			break;
			case 3:day="Wednesday"
			document.body,style.backgroundImage="url(./wed.jpg)"
			break;
			case 4:day="Thrusday"
			document.body,style.backgroundImage="url(./thu.jpg)"
			break;
			case 5:day="Friday"
			document.body,style.backgroundImage="url(./fri.jpg)"
			break;
			case 6:day="Saturday"
			document.body,style.backgroundImage="url(./sun.jpg)"
			break;
		}
		console.log(day)
		document.getElementById("time").innerHTML=`${hh}:${mm} ${am_pm}`
		document.getElementById("date").innerHTML=`${dd}/${mo}/${yy}`
		document.getElementById("day").innerHTML=day
		document.getElementById("sec").innerHTML=ss
		setTimeout(clock,1000)//audiofile pixabay sound
}
clock()
var audio=new Audio()
audio.src="./clock.mp3"

function alarmFunction()
{
	var date=new Date()
	var hh=date.getHours()
	var mm=date.getMinutes()
	var am_pm="AM"
	if(hh>12)
	{
		am_pm="PM"
		if(hh>12)
		{
			hh=hh-12;
		}
	}
	if(hh==0)
	{
		hh=12;
	}
	var userGivenhh=document.getElementById("userHours").value
	var userGivenmm=document.getElementById("userMin").value
	var userGivenam_pm=document.getElementById("userAm_Pm").value
	console.log(hh,mm,am_pm)
	console.log(userGivenhh,userGivenmm,userGivenam_pm)
	
	if(hh==userGivenhh && mm==userGivenmm && am_pm==userGivenam_pm)
	{
		audio.play()
		audio.loop=Infinity
	}
	else{
		audio.pause()
	}
	setTimeout(alarmFunction,1000)
}
function closeWindow()
{
	document.getElementById("alarmContainer").style.display="none"
}
function openWindow()
{
	document.getElementById("alarmContainer").style.display="flex"
}