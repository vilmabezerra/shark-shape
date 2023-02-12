import { useRouter } from "next/router";
import { GoBack } from "../icons/GoBack";

export function GoBackButton() {
  const router = useRouter();
  function goBack() {
    router.back();
  }
  return (
    <GoBack onClick={goBack} className="go-back" />
  )
}