import { useEffect, useState } from "react";
import { validateEmail } from "~/constants";
import getUserItems, { IItem } from "../../services/getUserItems";

const userItemsProvider = ({ refresh }: { refresh: boolean }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<String>();
  const [items, setItems] = useState<Array<IItem>>([]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      try {
        const userItems = await getUserItems();

        setItems(userItems.filter((item) => item.email.match(validateEmail)));
      } catch (error) {
        setErrorMessage(error.message);
      }

      setIsLoading(false);
    })();
  }, [refresh]);

  return {
    isLoading,
    errorMessage,
    items,
  };
};

export default userItemsProvider;
