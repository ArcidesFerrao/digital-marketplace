"use client";

import { approveProduct } from "@/app/actions/approveProduct";
import { useRouter } from "next/navigation";
import React, { useActionState, useEffect } from "react";
import toast from "react-hot-toast";

export const ApproveForm = ({ productId }: { productId: string }) => {
  const router = useRouter();
  const [state, action, pending] = useActionState(approveProduct, undefined);

  useEffect(() => {
    if (state?.status === "success") {
      toast.success(state.message);
      router.refresh();
    }
  }, [state, router]);

  return (
    <form className="approve-form" action={action}>
      <input type="hidden" name="productId" value={productId} />
      <button type="submit" disabled={pending}>
        {pending ? "..." : "Aprovar"}
      </button>
    </form>
  );
};
