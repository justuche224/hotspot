"use server";

import db from "@/db";
import {
  branches,
  categories,
  food_items,
  orders,
  order_items,
  order_status,
} from "@/db/schema";
import { uploadFile } from "@/lib/upload";
import { slugify } from "@/lib/slugify";
import { serverAuth } from "@/lib/server-auth";
import { eq, and, desc } from "drizzle-orm";

// ADMIN ACTIONS

export const createBranch = async (formData: FormData) => {
  const user = await serverAuth();

  if (!user) return { error: "Unauthorized" };
  if (user.role !== "admin") return { error: "Unauthorized" };

  const name = formData.get("name");
  const address = formData.get("address");
  const phone = formData.get("phone");
  const email = formData.get("email");
  const description = formData.get("description");
  const banner = formData.get("banner");
  const whatsapp = formData.get("whatsapp");

  if (!name || !address || !phone || !email || !description || !whatsapp)
    return { error: "All fields are required" };

  let bannerUrl = null;

  if (banner && banner instanceof File) {
    bannerUrl = await uploadFile(banner, "banner");
  }

  await db.insert(branches).values({
    name: name as string,
    slug: slugify(name as string),
    address: address as string,
    phone: phone as string,
    email: email as string,
    description: description as string,
    banner: bannerUrl,
    whatsapp: whatsapp as string,
  });

  return { success: "Branch created successfully" };
};

export const updateBranch = async (branchId: string, formData: FormData) => {
  const user = await serverAuth();

  if (!user) return { error: "Unauthorized" };
  if (user.role !== "admin") return { error: "Unauthorized" };

  const name = formData.get("name");
  const address = formData.get("address");
  const phone = formData.get("phone");
  const email = formData.get("email");
  const description = formData.get("description");
  const banner = formData.get("banner");
  const whatsapp = formData.get("whatsapp");

  if (!name || !address || !phone || !email || !description || !whatsapp)
    return { error: "All fields are required" };

  let bannerUrl = null;

  if (banner && banner instanceof File) {
    bannerUrl = await uploadFile(banner, "banner");
  }

  const updateData: Partial<typeof branches.$inferInsert> = {
    name: name as string,
    address: address as string,
    phone: phone as string,
    email: email as string,
    description: description as string,
    whatsapp: whatsapp as string,
    updatedAt: new Date(),
  };

  if (bannerUrl) {
    updateData.banner = bannerUrl;
  }

  await db.update(branches).set(updateData).where(eq(branches.id, branchId));

  return { success: "Branch updated successfully" };
};

export const deleteBranch = async (branchId: string) => {
  const user = await serverAuth();

  if (!user) return { error: "Unauthorized" };
  if (user.role !== "admin") return { error: "Unauthorized" };

  await db.delete(branches).where(eq(branches.id, branchId));

  return { success: "Branch deleted successfully" };
};

export const getBranches = async () => {
  const user = await serverAuth();

  if (!user) return { error: "Unauthorized" };
  if (user.role !== "admin") return { error: "Unauthorized" };

  const result = await db
    .select()
    .from(branches)
    .orderBy(desc(branches.createdAt));

  return { success: true, data: result };
};

// CATEGORY ADMIN ACTIONS
export const createCategory = async (branchId: string, formData: FormData) => {
  const user = await serverAuth();

  if (!user) return { error: "Unauthorized" };
  if (user.role !== "admin") return { error: "Unauthorized" };

  const name = formData.get("name");

  if (!name) return { error: "Category name is required" };

  await db.insert(categories).values({
    branchId: branchId,
    name: name as string,
    slug: slugify(name as string),
  });

  return { success: "Category created successfully" };
};

export const updateCategory = async (
  categoryId: string,
  formData: FormData
) => {
  const user = await serverAuth();

  if (!user) return { error: "Unauthorized" };
  if (user.role !== "admin") return { error: "Unauthorized" };

  const name = formData.get("name");

  if (!name) return { error: "Category name is required" };

  await db
    .update(categories)
    .set({
      name: name as string,
      slug: slugify(name as string),
      updatedAt: new Date(),
    })
    .where(eq(categories.id, categoryId));

  return { success: "Category updated successfully" };
};

export const deleteCategory = async (categoryId: string) => {
  const user = await serverAuth();

  if (!user) return { error: "Unauthorized" };
  if (user.role !== "admin") return { error: "Unauthorized" };

  await db.delete(categories).where(eq(categories.id, categoryId));

  return { success: "Category deleted successfully" };
};

export const getCategories = async (branchId: string) => {
  const user = await serverAuth();

  if (!user) return { error: "Unauthorized" };
  if (user.role !== "admin") return { error: "Unauthorized" };

  const result = await db
    .select()
    .from(categories)
    .where(eq(categories.branchId, branchId))
    .orderBy(desc(categories.createdAt));

  return { success: true, data: result };
};

// FOOD ITEM ADMIN ACTIONS
export const createFoodItem = async (
  branchId: string,
  categoryId: string,
  formData: FormData
) => {
  const user = await serverAuth();

  if (!user) return { error: "Unauthorized" };
  if (user.role !== "admin") return { error: "Unauthorized" };

  const name = formData.get("name");
  const description = formData.get("description");
  const image = formData.get("image");
  const price = formData.get("price");

  if (!name || !description || !image || !price)
    return { error: "All fields are required" };

  if (!(image instanceof File)) return { error: "Invalid image file" };

  const imageUrl = await uploadFile(image, "food-item");

  await db.insert(food_items).values({
    branchId: branchId,
    categoryId: categoryId,
    name: name as string,
    slug: slugify(name as string),
    description: description as string,
    image: imageUrl,
    price: parseInt(price as string),
  });

  return { success: "Food item created successfully" };
};

export const updateFoodItem = async (
  foodItemId: string,
  formData: FormData
) => {
  const user = await serverAuth();

  if (!user) return { error: "Unauthorized" };
  if (user.role !== "admin") return { error: "Unauthorized" };

  const name = formData.get("name");
  const description = formData.get("description");
  const image = formData.get("image");
  const price = formData.get("price");

  if (!name || !description || !price)
    return { error: "All fields are required" };

  const updateData: Partial<typeof food_items.$inferInsert> = {
    name: name as string,
    slug: slugify(name as string),
    description: description as string,
    price: parseInt(price as string),
    updatedAt: new Date(),
  };

  if (image && image instanceof File) {
    updateData.image = await uploadFile(image, "food-item");
  }

  await db
    .update(food_items)
    .set(updateData)
    .where(eq(food_items.id, foodItemId));

  return { success: "Food item updated successfully" };
};

export const deleteFoodItem = async (foodItemId: string) => {
  const user = await serverAuth();

  if (!user) return { error: "Unauthorized" };
  if (user.role !== "admin") return { error: "Unauthorized" };

  await db.delete(food_items).where(eq(food_items.id, foodItemId));

  return { success: "Food item deleted successfully" };
};

export const getFoodItems = async (branchId: string, categoryId?: string) => {
  const user = await serverAuth();

  if (!user) return { error: "Unauthorized" };
  if (user.role !== "admin") return { error: "Unauthorized" };

  let whereClause;
  if (categoryId) {
    whereClause = and(
      eq(food_items.branchId, branchId),
      eq(food_items.categoryId, categoryId)
    );
  } else {
    whereClause = eq(food_items.branchId, branchId);
  }

  const result = await db
    .select()
    .from(food_items)
    .where(whereClause)
    .orderBy(desc(food_items.createdAt));

  return { success: true, data: result };
};

// ORDER ADMIN ACTIONS
export const getAllOrders = async (branchId?: string) => {
  const user = await serverAuth();

  if (!user) return { error: "Unauthorized" };
  if (user.role !== "admin") return { error: "Unauthorized" };

  let whereClause;
  if (branchId) {
    whereClause = eq(orders.branchId, branchId);
  }

  const result = await db
    .select()
    .from(orders)
    .where(whereClause)
    .orderBy(desc(orders.createdAt));

  return { success: true, data: result };
};

export const updateOrderStatus = async (
  orderId: string,
  status: (typeof order_status)[number]
) => {
  const user = await serverAuth();

  if (!user) return { error: "Unauthorized" };
  if (user.role !== "admin") return { error: "Unauthorized" };

  if (!order_status.includes(status)) {
    return { error: "Invalid status" };
  }

  await db
    .update(orders)
    .set({
      status: status,
      updatedAt: new Date(),
    })
    .where(eq(orders.id, orderId));

  return { success: "Order status updated successfully" };
};

export const getOrderDetails = async (orderId: string) => {
  const user = await serverAuth();

  if (!user) return { error: "Unauthorized" };
  if (user.role !== "admin") return { error: "Unauthorized" };

  const [order] = await db.select().from(orders).where(eq(orders.id, orderId));

  if (!order) return { error: "Order not found" };

  const orderItems = await db
    .select()
    .from(order_items)
    .where(eq(order_items.orderId, orderId));

  return { success: true, data: { order, orderItems } };
};

// PUBLIC ACTIONS

export const getPublicBranches = async () => {
  const result = await db
    .select({
      id: branches.id,
      name: branches.name,
      slug: branches.slug,
      address: branches.address,
      phone: branches.phone,
      email: branches.email,
      description: branches.description,
      banner: branches.banner,
      whatsapp: branches.whatsapp,
      createdAt: branches.createdAt,
    })
    .from(branches)
    .orderBy(desc(branches.createdAt));

  return { success: true, data: result };
};

export const getBranchBySlug = async (slug: string) => {
  const [branch] = await db
    .select()
    .from(branches)
    .where(eq(branches.slug, slug));

  if (!branch) return { error: "Branch not found" };

  return { success: true, data: branch };
};

export const getPublicCategories = async (branchId: string) => {
  const result = await db
    .select()
    .from(categories)
    .where(eq(categories.branchId, branchId))
    .orderBy(desc(categories.createdAt));

  return { success: true, data: result };
};

export const getPublicFoodItems = async (
  branchId: string,
  categoryId?: string
) => {
  let whereClause;
  if (categoryId) {
    whereClause = and(
      eq(food_items.branchId, branchId),
      eq(food_items.categoryId, categoryId)
    );
  } else {
    whereClause = eq(food_items.branchId, branchId);
  }

  const result = await db
    .select()
    .from(food_items)
    .where(whereClause)
    .orderBy(desc(food_items.createdAt));

  return { success: true, data: result };
};

export const getFoodItemBySlug = async (branchId: string, slug: string) => {
  const [foodItem] = await db
    .select()
    .from(food_items)
    .where(and(eq(food_items.branchId, branchId), eq(food_items.slug, slug)));

  if (!foodItem) return { error: "Food item not found" };

  return { success: true, data: foodItem };
};

export const createOrder = async (formData: FormData) => {
  const branchId = formData.get("branchId");
  const customerName = formData.get("customerName");
  const customerPhone = formData.get("customerPhone");
  const customerAddress = formData.get("customerAddress");
  const items = formData.get("items"); // JSON string of items

  if (
    !branchId ||
    !customerName ||
    !customerPhone ||
    !customerAddress ||
    !items
  ) {
    return { error: "All fields are required" };
  }

  try {
    const parsedItems = JSON.parse(items as string);

    // Calculate total amount
    let totalAmount = 0;
    for (const item of parsedItems) {
      const [foodItem] = await db
        .select()
        .from(food_items)
        .where(eq(food_items.id, item.foodItemId));

      if (!foodItem) return { error: "Invalid food item" };
      totalAmount += foodItem.price * item.quantity;
    }

    // Create order
    const [order] = await db
      .insert(orders)
      .values({
        branchId: branchId as string,
        customerName: customerName as string,
        customerPhone: customerPhone as string,
        customerAddress: customerAddress as string,
        totalAmount: totalAmount,
        status: "pending",
      })
      .returning();

    // Create order items
    for (const item of parsedItems) {
      const [foodItem] = await db
        .select()
        .from(food_items)
        .where(eq(food_items.id, item.foodItemId));

      await db.insert(order_items).values({
        orderId: order.id,
        foodItemId: item.foodItemId,
        branchId: branchId as string,
        quantity: item.quantity,
        price: foodItem.price,
      });
    }

    return {
      success: "Order created successfully",
      data: { orderId: order.id },
    };
  } catch {
    return { error: "Invalid items data" };
  }
};

// export const getOrderStatus = async (orderId: string) => {
//   const [order] = await db.select().from(orders).where(eq(orders.id, orderId));

//   if (!order) return { error: "Order not found" };

//   const orderItems = await db
//     .select()
//     .from(order_items)
//     .where(eq(order_items.orderId, orderId));

//   return { success: true, data: { order, orderItems } };
// };

// export const getOrdersByPhone = async (phone: string) => {
//   const result = await db
//     .select()
//     .from(orders)
//     .where(eq(orders.customerPhone, phone))
//     .orderBy(desc(orders.createdAt));

//   return { success: true, data: result };
// };
