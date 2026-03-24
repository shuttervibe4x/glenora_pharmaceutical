import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { ProductCard } from "@/components/shared/ProductCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { products } from "@/data/products";
import { Minus, Plus, ShoppingCart, Star } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((item) => item.id === id) || products[0];
  const relatedProducts = products.filter((item) => item.id !== product.id).slice(0, 4);
  const productDetails = product.details || [
    { label: "Brand", value: "Glenora Pharmaceuticals" },
    { label: "Availability", value: product.inStock ? "In stock" : "Out of stock" },
  ];
  const productHighlights = [
    "Quality healthcare supplement from Glenora Pharmaceuticals",
    "Please use as directed by your physician or dietician",
    "Store in a cool and dry place away from direct sunlight",
    "Contact on WhatsApp for stock confirmation and ordering",
  ];

  return (
    <Layout>
      <PageHeader
        title="Product Details"
        breadcrumbs={[
          { label: "Shop", path: "/shop" },
          { label: product.name },
        ]}
      />

      <section className="py-8 md:py-12">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-card rounded-2xl p-6 card-shadow">
              <div className="aspect-square overflow-hidden rounded-xl bg-muted">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
            </div>

            <div>
              <Badge className="bg-secondary text-secondary-foreground mb-2">Glenora</Badge>

              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {product.name}
              </h1>

              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl font-bold text-primary">
                  Rs. {product.price.toFixed(2)}
                </span>
              </div>

              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className={`h-5 w-5 ${index < Math.floor(product.rating) ? "text-accent fill-accent" : "text-muted-foreground"}`}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">({product.reviews} reviews)</span>
              </div>

              <ul className="space-y-2 mb-6">
                {productHighlights.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-muted transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-muted transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <Button asChild className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                  <a
                    href={getWhatsAppLink(`${product.name} (Qty: ${quantity})`, product.price * quantity)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Order on WhatsApp
                  </a>
                </Button>
              </div>

              <Badge className={product.inStock ? "bg-medico-green text-white" : "bg-destructive text-white"}>
                {product.inStock ? "In Stock" : "Out of Stock"}
              </Badge>
            </div>
          </div>

          <Tabs defaultValue="description" className="mb-16">
            <TabsList className="w-full justify-start bg-muted/50 rounded-xl p-1">
              <TabsTrigger value="description" className="rounded-lg">Description</TabsTrigger>
              <TabsTrigger value="details" className="rounded-lg">Product Details</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-6">
              <div className="bg-card rounded-xl p-6 card-shadow">
                <h3 className="text-xl font-semibold text-foreground mb-4">Product Description</h3>
                <p className="text-muted-foreground">
                  {product.description || "This product is part of the Glenora healthcare range. Please contact the team on WhatsApp for complete usage guidance and stock confirmation."}
                </p>
              </div>
            </TabsContent>

            <TabsContent value="details" className="mt-6">
              <div className="bg-card rounded-xl p-6 card-shadow">
                <h3 className="text-xl font-semibold text-foreground mb-4">General Information</h3>
                <table className="w-full">
                  <tbody className="divide-y">
                    {productDetails.map(({ label, value }) => (
                      <tr key={label}>
                        <td className="py-3 text-muted-foreground">{label}</td>
                        <td className="py-3 text-foreground font-medium">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
          </Tabs>

          {relatedProducts.length > 0 && (
            <div className="mb-16">
              <SectionHeader
                title="You Might Also Like"
                subtitle="Check out these similar products"
                action={
                  <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    <Link to="/shop">View All</Link>
                  </Button>
                }
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct, index) => (
                  <div
                    key={relatedProduct.id}
                    className="animate-fade-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <ProductCard product={relatedProduct} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
