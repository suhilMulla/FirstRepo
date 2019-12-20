		var teamInfo=document.getElementById("info");
		var btn=document.getElementById("btn");

		btn.addEventListener("click",function()
		{
			var ourRequest=new XMLHttpRequest();
			ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-1.json');
			ourRequest.onload=function()
			 {
				console.log(ourRequest.responseText);
				var ourData=ourRequest.responseText;
				var ourData=JSON.parse(ourRequest.responseText);
				console.log(ourData[0]);
				renderHTML(ourData);
			};

			ourRequest.send();

		
			function renderHTML(data) {
				var htmlString="";

				for(i=0; i<data.length; i++)
				{
					htmlString+="<p>"+data[i].name+" is a "+data[i].species+" that likes ";

					for(ii=0; ii<data[i].foods.likes.length;ii++)
					{
						if(ii==0)
						{
							htmlString+=data[i].foods.likes[ii];
						}
						else
						{
							htmlString+=" and "+data[i].foods.likes[ii];
						}
					}

				htmlString+= ' and dislikes ';

				for(ii=0; ii<data[i].foods.dislikes.length;ii++)
					{
						if(ii==0)
						{
							htmlString+=data[i].foods.dislikes[ii];
						}
						else
						{
							htmlString+=" and "+data[i].foods.dislikes[ii];
						}
					}

				htmlString+='.</p>';
				}

				info.insertAdjacentHTML('beforeend',htmlString);
			}
		})