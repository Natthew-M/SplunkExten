const TextToSplunk = new Map(
    [
        ["MouserCom", "https://mouser.splunkcloud.com/en-US/app/search/search?q=search%20index%3D%22ib_mousercom_prod%22%7C%20spath%20%22serilog_input_headers.request_path%22%20%7C%20search%20%22serilog_input_headers.request_path%22%3D%22%2FMouserCom%2FPROD%22&display.page.search.mode=verbose&dispatch.sample_ratio=1&workload_pool=standard_perf&earliest=-1m%40m&latest=now&sid=1717006118.5182146"],
        ["IBCentral", "https://mouser.splunkcloud.com/en-US/app/search/search?q=search%20index%3Dib_test_serilog%20%7C%20spath%20%22serilog_input_headers.request_path%22%20%7C%20search%20%22serilog_input_headers.request_path%22%3D%22%2FIBCentral%2F*%22&display.page.search.mode=verbose&dispatch.sample_ratio=1&workload_pool=standard_perf&earliest=-1h%40h&latest=now&display.prefs.fieldFilter=index&sid=1717007573.5183107"],
        ["OrderService", "https://mouser.splunkcloud.com/en-US/app/search/search?q=search%20index%3Dib_mousercom_prod%7C%20spath%20%22serilog_input_headers.request_path%22%20%7C%20search%20%22serilog_input_headers.request_path%22%3D%22%2Forderservice%2FPROD%22&display.page.search.mode=verbose&dispatch.sample_ratio=1&workload_pool=standard_perf&earliest=-15m%40m&latest=now&display.prefs.fieldFilter=index&sid=1717008069.5183457"],
        ["OrderServiceErrors", "https://mouser.splunkcloud.com/en-US/app/search/search?dispatch.sample_ratio=1&display.events.fields=%5B%22%40timestamp%22%2C%22Level%22%2C%22RenderedMessage%22%2C%22event.Properties.ElapsedMilliseconds%22%2C%22Properties.MachineName%22%2C%22event.Properties.MachineName%22%2C%22event.Level%22%2C%22event.RenderedMessage%22%2C%22errorCode%22%2C%22event.Properties.RequestPath%22%2C%22reqMethod%22%2C%22reqPath%22%2C%22statusCode%22%5D&display.page.search.mode=smart&workload_pool=standard_perf&q=search%20%22serilog_input_headers.request_path%22%3D%22%2Forderservice%2FPROD%22%20%20%22event.Level%22%3DError%20%7C%20stats%20earliest(%40timestamp)%2C%20count(event.Properties.ErrorDetails)%20by%20%22event.Properties.ErrorDetails%22&earliest=-30h%40h&latest=now&display.page.search.tab=statistics&display.general.type=statistics&sid=1717438611.5486367"],
        ["MouserComQAErrors","https://mouser.splunkcloud.com/en-US/app/search/search?dispatch.sample_ratio=1&display.events.fields=%5B%22%40timestamp%22%2C%22Level%22%2C%22RenderedMessage%22%2C%22event.Properties.ElapsedMilliseconds%22%2C%22Properties.MachineName%22%2C%22event.Properties.MachineName%22%2C%22event.Level%22%2C%22event.RenderedMessage%22%2C%22errorCode%22%2C%22event.Properties.RequestPath%22%2C%22reqMethod%22%2C%22reqPath%22%2C%22statusCode%22%5D&display.page.search.mode=smart&workload_pool=standard_perf&q=search%20%22serilog_input_headers.request_path%22%3D%22%2Fmousercom%2Fqa%22%20%20%22event.Level%22%3DError%20%7C%20stats%20earliest(%40timestamp)%2C%20count(event.MessageTemplate%0A)%20by%20%22event.MessageTemplate%22&earliest=-3d%40d&latest=now&display.page.search.tab=statistics&display.general.type=statistics&display.visualizations.charting.chart=line&display.visualizations.type=singlevalue&display.prefs.statistics.count=50&display.statistics.sortColumn=count(event.MessageTemplate)&display.statistics.sortDirection=desc&sid=1717599316.5602715"],
        ["TradeCompliace","https://mouser.splunkcloud.com/en-US/app/search/search?dispatch.sample_ratio=1&display.events.fields=%5B%22%40timestamp%22%2C%22Level%22%2C%22RenderedMessage%22%2C%22event.Properties.ElapsedMilliseconds%22%2C%22Properties.MachineName%22%2C%22event.Properties.MachineName%22%2C%22event.Level%22%2C%22event.RenderedMessage%22%2C%22errorCode%22%2C%22event.Properties.RequestPath%22%2C%22reqMethod%22%2C%22reqPath%22%2C%22statusCode%22%5D&display.page.search.mode=smart&workload_pool=standard_perf&q=search%20index%3Dib_akamai_mousercom_datastream%20reqHost%3D%22trade-compliance.mouser.com%22&earliest=-30m%40m&latest=now&sid=1717444568.5490633"]
    ]
);
let SplunkJson;
const Test = fetch('https://apitodb.azurewebsites.net/api/Function1?code=_dlvcU8AZTUYioklKPeXV6WZWqEaAPP4FND25RgniXCRAzFuvfvuPQ%3D%3D');
Test.then((response) => response.json()).then( data => useJsonToCreateOption(data))

var selector = document.createElement('select');
selector.id = "KibanaESCDropDown";
//TextToSplunk.forEach(createOption)
var NavButton = document.createElement('button');
NavButton.textContent = "GO";
NavButton.id = "NavButton";
NavButton.onclick = function goToQuery() {
    var l = document.getElementById("KibanaESCDropDown").value;
    window.open(l, "_blank");
    console.log("AHHH");
    console.log(l);
}

console.log(selector);

window.onload = () =>
{

    setTimeout(() => appendToDocument(), 3000 );

}
function appendToDocument()
{
    (document.getElementsByClassName("search-title")[0]).appendChild(selector);
    (document.getElementsByClassName("search-title")[0]).appendChild(NavButton);    
}

function createOption(value, key)
{
    console.log(key);
    var option = document.createElement('option');
    option.value = value;
    option.innerHTML = key;
    selector.options.add(option);
}

function useJsonToCreateOption(Data)
{
    const JsonOBJ = Data;
    Object.keys(JsonOBJ).forEach(key=> createOption(JsonOBJ[key],key));
  }

