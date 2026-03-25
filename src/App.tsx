import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import SiteLayout from "./layouts/SiteLayout";
import Home from "./pages/Home";

export default function App() {
  const location = useLocation();

  return (
    <SiteLayout>
      <AnimatePresence mode="wait">
        <motion.div
          key={`${location.pathname}${location.search}${location.hash}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route
              path="/about"
              element={<Navigate to="/#why-choose-us" replace />}
            />
            <Route
              path="/services"
              element={<Navigate to="/#services" replace />}
            />
            <Route
              path="/areas-we-cover"
              element={<Navigate to="/#contact" replace />}
            />
            <Route
              path="/gallery"
              element={<Navigate to="/#gallery" replace />}
            />
            <Route
              path="/reviews"
              element={<Navigate to="/#testimonials" replace />}
            />
            <Route
              path="/contact"
              element={<Navigate to="/#contact" replace />}
            />
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
        </motion.div>
      </AnimatePresence>
    </SiteLayout>
  );
}

