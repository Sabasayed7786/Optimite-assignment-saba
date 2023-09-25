import React, { useState } from 'react';
import Modal from 'react-modal';
import { v4 as uuidv4 } from 'uuid'; // Import uuid

import { useProductContext } from '../context/ProductContext';
import './AddProductPopup.css'; // Import your CSS file for styling

Modal.setAppElement('#root'); // Set the root element for accessibility

function AddProductPopup({ isOpen, onRequestClose }) {
    const [newProduct, setNewProduct] = useState({
        id: uuidv4(), // Generate a unique id
        title: '',
        price: '',
        description: '',
        image: '',
    });
    const { addProduct } = useProductContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct(newProduct);
        onRequestClose();
        // Generate a new unique id for the next product
        setNewProduct({
            id: uuidv4(),
            title: '',
            price: '',
            description: '',
            image: '',
        });
    };

    const handleImageChange = (e) => {
        // Handle image input change and update 'image' property in state
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setNewProduct({ ...newProduct, image: event.target.result });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Add Product"
            className="modal" // Apply a CSS class for styling
            overlayClassName="overlay" // Apply a CSS class for the overlay
        >
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={newProduct.title}
                        onChange={(e) =>
                            setNewProduct({ ...newProduct, title: e.target.value })
                        }
                    />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        id="price"
                        value={newProduct.price}
                        onChange={(e) =>
                            setNewProduct({ ...newProduct, price: e.target.value })
                        }
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        value={newProduct.description}
                        onChange={(e) =>
                            setNewProduct({ ...newProduct, description: e.target.value })
                        }
                    />
                </div>
                <div>
                    <label htmlFor="image">Image:</label>
                    <input
                        type="file"
                        id="image"
                        accept="image/*" // Allow only image files
                        onChange={handleImageChange}
                    />
                </div>
                <button type="submit" className="save-button">Save</button>
            </form>
        </Modal>
    );
}

export default AddProductPopup;
