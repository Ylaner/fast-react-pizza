import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder() {
  const fetcher = useFetcher();
  const isFetching = fetcher.state === "loading";
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary" disabled={isFetching}>
        {isFetching ? "Updating..." : "Make priority"}
      </Button>
    </fetcher.Form>
  );
}

export async function action({ request, params }) {
  await updateOrder(params.orderId, { priority: true });
  return null;
}

export default UpdateOrder;
