// Specify types within yaml
declare module "*.yml" {
    const item: any; // Add type definitions here if desired
    const objective: string;
    // const item: string;
    export default item;
    export default objective;
}
