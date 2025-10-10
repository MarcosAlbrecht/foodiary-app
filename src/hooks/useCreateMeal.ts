import { useMutation, useQueryClient } from "@tanstack/react-query";
import { httpClient } from "../app/services/httpClient";

type CreateMealResponse = {
  uploadURL: string;
  mealId: string;
};

type CreateMealParams = {
  fileType: "image/jpeg" | "audio/m4a";
  onSuccess(mealId: string): void;
};

export function useCreateMeal({ fileType, onSuccess }: CreateMealParams) {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (uri: string) => {
      const { data } = await httpClient.post<CreateMealResponse>("/meals", {
        fileType,
      });

      /// 1️⃣ Cria Blob a partir do arquivo local
      const blob = await fetch(uri).then((r) => r.blob());

      // 2️⃣ Envia diretamente para S3
      const response = await fetch(data.uploadURL, {
        method: "PUT",
        headers: { "Content-Type": fileType },
        body: blob,
      });

      if (!response.ok) {
        throw new Error(`Erro no upload: ${response.statusText}`);
      }

      // 4️⃣ Retorna o mealId
      return { mealId: data.mealId };
    },
    onSuccess: ({ mealId }) => {
      onSuccess(mealId);
      queryClient.refetchQueries({ queryKey: ["meals"] });
    },
  });

  return {
    createMeal: mutateAsync,
    isLoading: isPending,
  };
}
