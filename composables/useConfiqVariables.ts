export const useConfigVariables = () => {
  const config = useRuntimeConfig();
  console.log("runtime config in composables", config);
};
