using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Blazorise;
using Blazorise.Tailwind;
using Blazorise.Icons.FontAwesome;
using ShakeBlazor;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });

builder.Services
    .AddGumtreeClient()
    .ConfigureHttpClient(c => c.BaseAddress = new Uri("https://nodegraphql-tog7.onrender.com/graphql"))
    .ConfigureWebSocketClient(c => c.Uri = new Uri("https://nodegraphql-tog7.onrender.com/graphql"));

builder.Services
    .AddBlazorise()
    .AddTailwindProviders()
    .AddFontAwesomeIcons();

await builder.Build().RunAsync();

