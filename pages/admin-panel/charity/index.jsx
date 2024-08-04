import Link from "next/link";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import { AdminLayout } from "../layout";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";

function Dashboard() {
  const router = useRouter();
  const [charities, setCharities] = useState([]); // Renamed state variable to match expected data
  const { toast } = useToast();

  const getCharities = async () => {
    try {
      const res = await axios.post(`/api/getCharity`);
      setCharities(res.data.charities); // Ensure you are accessing `charities`
    } catch (error) {
      showToast("error", "Server Downtime, Please Try Again Later!");
    }
  };

  const showToast = (type, message) => {
    toast({
      description: message,
      variant: type === "error" ? "destructive" : "default",
    });
  };

  useEffect(() => {
    getCharities(); // Ensure this function name is correct
    if (!localStorage.getItem("token")) {
      router.push("/");
    }
  }, []);

  const handleActivity = async (id) => {
    try {
      await axios.post("/api/changeCharityActivity", {
        charityId: id,
      });
      showToast("success", "Activity changed successfully!");
      getCharities(); // Refresh data
    } catch (error) {
      showToast("error", "Failed to change Activity!");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.post("/api/deleteCharity", {
        charityId: id,
      });
      showToast("success", "Charity deleted successfully!");
      getCharities(); // Refresh data
    } catch (error) {
      showToast("error", "Failed to delete Charity!");
    }
  };

  const handleHighlight = async (id) => {
    try {
      await axios.post("/api/highlightCharity", {
        charityId: id,
      });
      showToast("success", "Highlight Status Changed!");
      getCharities(); // Refresh data
    } catch (error) {
      showToast("error", "Failed to change Highlight!");
    }
  };

  return (
    <AdminLayout>
      <Head>
        <title>Admin | Charity Listing</title>
      </Head>

      <div className="p-3">
        <div className="flex justify-between py-3 border-b-2 border-black">
          <div>
            <h1 className="text-2xl font-semibold">Charity Listing:</h1>
          </div>
          <div>
            <Link href={"/admin-panel/charity/create"}>
              <button
                type="button"
                className="rounded-md py-1 px-2 bg-green-400 hover:bg-green-500 text-black"
              >
                Add
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-3">
          <table className="w-full">
            <tbody>
              {charities.length > 0 ? (
                charities.map((item, index) => (
                  <tr className="border-b-2 border-gray-500" key={index}>
                    <td className="py-5">
                      <div className="w-16 h-16 rounded-md bg-black">
                        <img
                          className="w-full h-full rounded-md"
                          src={`/charity/${item.img_name}`}
                          alt="pic"
                        />
                      </div>
                    </td>
                    <td className="py-5">
                      <div>
                        <h2 className="text-2xl font-semibold capitalize">
                          {item.name}
                        </h2>
                        <p>
                          <b>Charity Id:</b> {item.id} {/* Assuming the ID field is named `id` */}
                        </p>
                      </div>
                    </td>
                    <td className="py-5">
                      <div className="text-center">
                        <input
                          type="checkbox"
                          name="highLight"
                          id="highLight"
                          onChange={() => {
                            handleHighlight(item.id);
                          }}
                          checked={item.highlighted === 1}
                        />
                        <p className="mt-1">Highlight Charity</p>
                      </div>
                    </td>
                    <td className="py-5">
                      <div className="flex justify-center space-x-3 items-center">
                        <div>
                          <Link href={`/admin-panel/wishlist/${item.id}`}>
                            <button
                              type="button"
                              className="bg-yellow-400 hover:bg-yellow-500 py-1 px-2 rounded-md text-black"
                            >
                              Item Wishlist
                            </button>
                          </Link>
                        </div>
                        <div>
                          <Link href={`/admin-panel/charity/edit/${item.id}`}>
                            <button type="button">
                              <img src="/icons/editIcon.png" alt="icon" />
                            </button>
                          </Link>
                        </div>
                        <div>
                          <button
                            type="button"
                            onClick={() => {
                              handleDelete(item.id);
                            }}
                          >
                            <img src="/icons/deleteIcon.png" alt="icon" />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="py-5">
                      <div>
                        <button
                          onClick={() => {
                            handleActivity(item.id);
                          }}
                          type="button"
                          className={`bg-${
                            item.isActive ? "green" : "red"
                          }-400 hover:bg-${
                            item.isActive ? "green" : "red"
                          }-500 py-1 px-2 rounded-md text-black`}
                        >
                          {item.isActive ? "Active" : "In-Active"}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">No charities found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Dashboard;
