import React from "react";
import { Route, Routes } from "react-router-dom";
import SiteLayout from "./layouts/SiteLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Areas from "./pages/Areas";
import Gallery from "./pages/Gallery";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/areas-we-cover" element={<Areas />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="*"
          element={
            <main className="mx-auto max-w-5xl px-4 py-20 text-center">
              <h1 className="text-3xl font-bold text-white">Page not found</h1>
              <p className="mt-3 text-brandGreen/80">
                The page you’re looking for doesn’t exist.
              </p>
            </main>
          }
        />
      </Routes>
    </SiteLayout>
  );
}

