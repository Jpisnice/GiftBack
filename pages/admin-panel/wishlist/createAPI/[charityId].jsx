import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { AdminLayout } from "../../layout";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { Progress } from "@/components/ui/progress"; // Import Progress component

const Create = () => {
  const router = useRouter();
  const { charityId } = router.query;
  const [keyWord, setKeyWord] = useState("");
  const [products, setProducts] = useState([]);
  const [importing, setImporting] = useState({});
  const [loading, setLoading] = useState(false); // Add loading state
  const [progress, setProgress] = useState(0); // Add progress state
  const { toast } = useToast();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/");
    }
  }, []);

  const handleChange = (e) => {
    setKeyWord(e.target.value);
  };

  const handleSearch = async () => {
    if (keyWord) {
      setLoading(true); // Set loading to true when starting search
      setProgress(0); // Reset progress
      try {
        const res = await axios.post(`/api/ebaySearch`, {
          q: keyWord,
        });
        setProducts(res?.data?.itemSummaries ?? []);
      } catch (error) {
        console.log("Error fetching data:", error);
        setProducts([]);
      } finally {
        setLoading(false); // Set loading to false when search is done
      }
    } else {
      setProducts([]);
    }
  };

  const showToast = (type, message) => {
    toast({
      description: message,
      variant: type === "error" ? "destructive" : "default",
    });
  };

  const importProduct = async (productDetails) => {
    const productPayload = {
      name: productDetails.title,
      imgName: productDetails.image?.imageUrl,
      price: productDetails.price.value,
      link: productDetails.itemWebUrl,
      charityId: charityId,
    };

    try {
      setImporting((prev) => ({ ...prev, [productDetails.itemId]: true }));
      const res = await axios.post("/api/ebayImport", productPayload);
      console.log(res);
      showToast("success", "Item Imported Successfully!");
    } catch (error) {
      console.error("Error importing item:", error);
      showToast("error", "Item already exists!");
      setImporting((prev) => ({ ...prev, [productDetails.itemId]: false }));
    }
  };

  useEffect(() => {
    if (loading) {
      const timer = setInterval(() => {
        setProgress((prev) => (prev < 100 ? prev + 10 : 100));
      }, 300);
      return () => clearInterval(timer);
    }
  }, [loading]);

  return (
    <AdminLayout>
      <Head>
        <title>GiftRight | Create Item</title>
      </Head>

      <div className="p-5">
        <h1 className="text-2xl font-semibold">Add Item:</h1>

        <div className="my-3 flex">
          <input
            type="text"
            onChange={handleChange}
            name="search"
            id="search"
            value={keyWord}
            className="border border-black rounded-l-full p-2 shadow-2xl flex-grow"
            placeholder="Search..."
          />
          <button
            type="button"
            onClick={handleSearch}
            className="bg-blue-500 hover:bg-blue-600 rounded-r-full text-white py-2 px-4"
          >
            Search
          </button>
        </div>
      </div>

      <div className="p-5">
        {loading ? (
          <div className="flex justify-center items-center flex-col py-4">
            <p>Loading  </p><br />
            <Progress value={progress} className="w-[60%]" />
          </div>
        ) : products.length > 0 ? (
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2">Title</th>
                <th className="py-2">Image</th>
                <th className="py-2">Price</th>
                <th className="py-2">Link</th>
                <th className="py-2">Import</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, index) => (
                <tr key={index} className="text-center border-t">
                  <td className="py-2 px-4">{item.title}</td>
                  <td className="py-2 px-4">
                    {item.image ? (
                      <img
                        className="w-16 h-16 object-cover"
                        src={item.image.imageUrl}
                        alt="pic"
                      />
                    ) : (
                      "No Image"
                    )}
                  </td>
                  <td className="py-2 px-4">£ {item.price.value}</td>
                  <td className="py-2 px-4">
                    <a
                      href={item.itemWebUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      View
                    </a>
                  </td>
                  <td className="py-2 px-4">
                    <button
                      type="button"
                      className={`py-1 px-2 rounded-md text-white ${
                        importing[item.itemId]
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-green-500 hover:bg-green-600"
                      }`}
                      onClick={() => importProduct(item)}
                      disabled={importing[item.itemId]}
                    >
                      {importing[item.itemId] ? "Imported" : "Import"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-red-500 text-2xl py-4 text-center">
            No Data Found!
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default Create;
