import { blogResponse } from "@/types";

export const MockBlogDetail: blogResponse = {
  id: 123,
  title: "Example Blog Post",
  detail: `<p>asdfasfasfa</p>
<p>asf</p>
<p>as</p>
<p>fs</p>
<p>fs</p>
<p>fas</p>
<p>&nbsp;</p>
<p><strong>asdf</strong></p>
<p><strong>asfa</strong></p>
<p><strong>sfa</strong></p>
<p><strong>sfas</strong></p>
<ul>
<li><strong>asdf</strong></li>
<li><strong>adsf</strong></li>
<li><strong>asdf</strong></li>
<li><strong>asfas</strong></li>
<li><strong>df</strong></li>
<li><strong>asfas</strong></li>
<li><strong>f</strong></li>
</ul>`,
  imageUrl:
    "https://images.pexels.com/photos/3586091/pexels-photo-3586091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  date: new Date(),
  userId: "user_456",
  user: {
    id: "user_456",
    name: "John",
    lastName: "Doe",
    photo:
      "https://images.pexels.com/photos/3586091/pexels-photo-3586091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    userName: "johndoe",
    password: "hashed_password",
    isActive: true,
    publicaciones: "string",
    state: 0,
    image:
      "https://images.pexels.com/photos/3586091/pexels-photo-3586091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  comments: [
    {
      post: "",
      id: 1,
      detail: "Great post!",
      postId: 123,
      userId: "user_789",
      date: new Date(),
      user: {
        id: "user_789",
        name: "Jane",
        lastName: "Smith",
        photo:
          "https://images.pexels.com/photos/3586091/pexels-photo-3586091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        email: "jane.smith@example.com",
        phone: "987-654-3210",
        userName: "janesmith",
        password: "hashed_password",
        isActive: true,
        publicaciones: "string",
        state: 0,
        image:
          "https://images.pexels.com/photos/3586091/pexels-photo-3586091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    },
  ],
  categories: [
    {
      id: 1,
      name: "Technology",
      detail: "Articles related to technology and gadgets.",
      resources: [
        {
          id: 101,
          name: "Tech Blog",
          detail: "A popular tech blog with the latest news and reviews.",
          imageUrl: "https://example.com/tech_blog.jpg",
          webSite: "https://example.com/tech-blog",
          locationUrl: "https://example.com/tech-blog/location",
          categories: ["Technology"],
        },
        {
          id: 102,
          name: "Gadget Reviews",
          detail: "A website providing in-depth gadget reviews.",
          imageUrl: "https://example.com/gadget_reviews.jpg",
          webSite: "https://example.com/gadget-reviews",
          locationUrl: "https://example.com/gadget-reviews/location",
          categories: ["Technology"],
        },
      ],
      tips: [
        {
          id: 201,
          name: "Top 10 Tech Tips",
          detail: "Useful tech tips and tricks for everyday use.",
          date: new Date(),
          categoryId: 1,
          category: "Technology",
        },
      ],
    },
    {
      id: 2,
      name: "Travel",
      detail: "Articles related to travel destinations and tips.",
      resources: [
        {
          id: 201,
          name: "Travel Blog",
          detail: "A travel blog sharing exciting travel stories.",
          imageUrl: "https://example.com/travel_blog.jpg",
          webSite: "https://example.com/travel-blog",
          locationUrl: "https://example.com/travel-blog/location",
          categories: ["Travel"],
        },
        {
          id: 202,
          name: "Travel Deals",
          detail: "A website offering great travel deals and discounts.",
          imageUrl: "https://example.com/travel_deals.jpg",
          webSite: "https://example.com/travel-deals",
          locationUrl: "https://example.com/travel-deals/location",
          categories: ["Travel"],
        },
      ],
      tips: [
        {
          id: 202,
          name: "Budget Travel Tips",
          detail: "Tips for traveling on a budget.",
          date: new Date(),
          categoryId: 2,
          category: "Travel",
        },
      ],
    },
  ],
};

export const MockBlogsDetail = new Array(15).fill(MockBlogDetail);
