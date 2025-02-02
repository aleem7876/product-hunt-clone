import { auth } from "@/auth";
import Navbar from "@/components/navbar/navbar";

import { getProductsByUserId, isUserPremium } from "@/lib/server-actions";
import { redirect } from "next/navigation";
import React from "react";

const NewProductLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const authenticatedUser = await auth();

  const products = await getProductsByUserId(authenticatedUser?.user?.id || "");

  const isPremium = await isUserPremium();

  if (!isPremium && products.length === 2) {
    redirect("/");
  };

  if (!authenticatedUser) {
    redirect("/")
  }
  return (
    <html lang="en">
      <body>
        <Navbar authenticatedUser={authenticatedUser} products={products} />
        {children}
      </body>
    </html>
  );
};

export default NewProductLayout;
