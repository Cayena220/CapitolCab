import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function DriverRoot() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/driver/Screens/dashboard");
  }, [router]);

  return null;
}
