using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using MonitoreoServidores.Context;
using MonitoreoServidores.Models;

namespace MonitoreoServidores.Controllers
{
    public class ServidoresController : Controller
    {
        private MonitoreoContext db = new MonitoreoContext();

        // GET: Servidores
        public ActionResult Index()
        {
            return View(db.Servidores.ToList());
        }

        // GET: Servidores/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Servidor servidor = db.Servidores.Find(id);
            if (servidor == null)
            {
                return HttpNotFound();
            }
            return View(servidor);
        }

        // GET: Servidores/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Servidores/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,Nombre,URL,Latitud,Longitud")] Servidor servidor)
        {
            if (ModelState.IsValid)
            {
                db.Servidores.Add(servidor);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(servidor);
        }

        // GET: Servidores/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Servidor servidor = db.Servidores.Find(id);
            if (servidor == null)
            {
                return HttpNotFound();
            }
            return View(servidor);
        }

        // POST: Servidores/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Nombre,URL,Latitud,Longitud")] Servidor servidor)
        {
            if (ModelState.IsValid)
            {
                db.Entry(servidor).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(servidor);
        }

        // GET: Servidores/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Servidor servidor = db.Servidores.Find(id);
            if (servidor == null)
            {
                return HttpNotFound();
            }
            return View(servidor);
        }

        // POST: Servidores/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Servidor servidor = db.Servidores.Find(id);
            db.Servidores.Remove(servidor);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
