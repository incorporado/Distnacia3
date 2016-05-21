using RestSharp;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Cache;
using System.Text;
using System.Web;

namespace MonitoreoServidores.Services
{
    public class ServidorService
    {
        public string Ejecutar(string address, string method, string body)
        {
            var client = new RestClient("http://192.168.1.190/WSDL/iLON100.WSDL");
            var request = new RestRequest(Method.POST);
            request.AddHeader("postman-token", "2c0d2f60-ee82-bb45-e181-1408a185abad");
            request.AddHeader("cache-control", "no-cache");
            request.AddParameter("undefined", "\n   <?xml version: \"1.0\" encoding=\"UTF-8\"?>\n<SOAP-ENV:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"><SOAP-ENV:Body><DataLogger_Read xmlns=\"http://wsdl.echelon.com/web_services_ns/ilon100/v3.0/message/\">\n<iLONDataLogger><Log><UCPTindex>6</UCPTindex><UCPTcount>1000</UCPTcount></Log></iLONDataLogger></DataLogger_Read>\n</SOAP-ENV:Body></SOAP-ENV:Envelope>", ParameterType.RequestBody);
            IRestResponse response = client.Execute(request);
            IRestResponse<List<Product>> response = client.Execute<List<Product>>(request);
            return response.Content;
        }
    }
}