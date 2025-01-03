import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { url } from '../../utils/Api';

const UploadBlog = () => {
  const [formData, setFormData] = useState({
    blogImage: null as File | null,
    author: '',
    title: '',
    details: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, blogImage: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const form = new FormData();
      form.append('blogImage', formData.blogImage as Blob);
      form.append('author', formData.author);
      form.append('title', formData.title);
      form.append('details', formData.details);

      const response = await axios.post(`${url}/blog/createblog`, form, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      toast.success(response.data.message || 'Blog uploaded successfully!');
      setFormData({ blogImage: null, author: '', title: '', details: '' });
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to upload blog');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="md:w-[70%] min-h-screen bg-gray-40 p-6 mt-[100px] ml-[100px] flex flex-col items-center justify-center bg-white rounded-[10px] text-[20px] font-bold">
      <h1 className="text-2xl mb-4">Upload Blog</h1>
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="blogImage" className="text-lg font-medium">Blog Image</label>
          <input
            type="file"
            name="blogImage"
            accept="image/*"
            onChange={handleImageChange}
            className="p-2 border rounded-md"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="author" className="text-lg font-medium">Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Enter author name"
            className="p-2 border rounded-md"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="title" className="text-lg font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter blog title"
            className="p-2 border rounded-md"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="details" className="text-lg font-medium">Details</label>
          <textarea
            name="details"
            value={formData.details}
            onChange={handleChange}
            placeholder="Enter blog details"
            className="p-2 border rounded-md"
            rows={5}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`p-2 text-white rounded-md ${isLoading ? 'bg-gray-500' : 'bg-blue-600 hover:bg-blue-700'}`}
        >
          {isLoading ? 'Uploading...' : 'Upload Blog'}
        </button>
      </form>

      {/* <ToastContainer /> */}
    </div>
  );
};

export default UploadBlog;
