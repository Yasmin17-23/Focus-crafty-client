

const AddCraftItem = () => {

    const handleAddCraft = event => {
        event.preventDefault();
        console.log('added craft item');
    }
    return (
        <div className="hero bg-orange-200 min-h-screen rounded-lg">
            <div className="hero-content flex-col">
                <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold text-lime-700 mt-4">Add An Art & Craft Item!</h1>
                <p className="py-6">
                    Please add some art & craft item for our Website. If you add an art & craft item, then you 
                    see it our website homepage.
                </p> 
                </div>
                <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
                    <form onSubmit={handleAddCraft} className="card-body">
                        {/* item name and image row */}
                        <div className="flex justify-between items-center mb-3">
                            <div className="form-control md:w-1/2 mr-3">
                                <label className="label">
                                    <span className="label-text font-semibold">Item Name</span>
                                </label>
                                <input type="text" name="itemName" placeholder="Item Name" 
                                className="input input-bordered md:w-full" />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold">Item Image</span>
                                </label>
                                <input type="text" name="image" placeholder="Image" 
                                className="input input-bordered  md:w-full" />

                            </div>
                        </div>
                        {/*subcategory name and customization row*/}
                        <div className="flex justify-between items-center mb-3">
                            <div className="form-control md:w-1/2 mr-3">
                                <label className="label">
                                    <span className="label-text font-semibold">SubCategory Name</span>
                                </label>
                                <input type="text" name="subcategory" placeholder="Subcategory Name" 
                                className="input input-bordered md:w-full"  />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold">Customization</span>
                                </label>
                                <input type="text" name="customization" placeholder="Customization" 
                                className="input input-bordered  md:w-full"  />

                            </div>
                        </div>
                        {/*price and rating row*/}
                        <div className="flex justify-between items-center mb-3">
                            <div className="form-control md:w-1/2 mr-3">
                                <label className="label">
                                    <span className="label-text font-semibold">Price</span>
                                </label>
                                <input type="text" name="price" placeholder="Price" 
                                className="input input-bordered md:w-full" />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold">Rating</span>
                                </label>
                                <input type="text" name="rating" placeholder="Rating" 
                                className="input input-bordered  md:w-full"  />

                            </div>
                        </div>
                        {/*processing time and stock status row*/}
                        <div className="flex justify-between items-center mb-3">
                            <div className="form-control md:w-1/2 mr-3">
                                <label className="label">
                                    <span className="label-text font-semibold">Processing Time</span>
                                </label>
                                <input type="text" name="processTime" placeholder="Processing Tome" 
                                className="input input-bordered md:w-full" />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold">Stock Status</span>
                                </label>
                                <input type="text" name="stock" placeholder="Stock Status" 
                                className="input input-bordered  md:w-full"  />

                            </div>
                        </div>
                        {/*user name and email row*/}
                        <div className="flex justify-between items-center mb-3">
                            <div className="form-control md:w-1/2 mr-3">
                                <label className="label">
                                    <span className="label-text font-semibold">User Name</span>
                                </label>
                                <input type="text" name="userName" placeholder="User Name" 
                                className="input input-bordered md:w-full"  />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold">User Email</span>
                                </label>
                                <input type="email" name="email" placeholder="User Email" 
                                className="input input-bordered  md:w-full"/>

                            </div>
                        </div>
                        {/*short description*/}
                        <div className="flex justify-between items-center mb-3">
                            <div className="form-control md:w-full mr-3">
                                <label className="label">
                                    <span className="label-text font-semibold">Short Description</span>
                                </label>
                                <input type="text" name="description" placeholder="Short Description" 
                                className="input input-bordered md:w-full"  />
                            </div>
                        </div>
                        
                        <input type="submit" value="Add Item" className="btn bg-orange-600 text-white font-bold text-xl"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCraftItem;