import React from "react";
import AppRoutes from "./routes";

const App: React.FC = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Anugrah Niaga Mandiri",
            url: "https://preciousmetaltester.online/",
            logo: "https://preciousmetaltester.online/logo.jpeg",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "081617408900",
              contactType: "customer service",
            },
          }),
        }}
      />
      <AppRoutes />
    </>
  );
};

export default App;
