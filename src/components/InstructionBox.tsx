import { Card } from "@/components/ui/card";

export function InstructionBox() {
  return (
    <Card className="bg-widget-bg border-widget-border p-6 rounded-2xl shadow-2xl max-w-2xl">
      <div className="space-y-3 text-text-secondary leading-relaxed text-sm">
        <ol className="space-y-2.5 list-decimal list-inside">
          <li className="pl-1">
            Make a duplicate of this figma by clicking on the drop-down next to the name "Assignment" 
            (visible on the top left side of the screen). Then you can use your local file
          </li>
          <li className="pl-1">
            Create a new GitHub repository for the assignment. Build the assignment using React or Next.js.
          </li>
          <li className="pl-1">
            You may use any styling or UI library, such as Tailwind CSS, shadcn, Chakra UI, or Material UI.
          </li>
          <li className="pl-1">
            Keep the left half of the screen empty (but it should be responsive for laptop, not mobile)
          </li>
          <li className="pl-1">
            Focus on the two widgets on the right hand side
          </li>
          <li className="pl-1">
            The first widget has three tabs: "about me", "experiences" & "recommended", these should be clickable
          </li>
          <li className="pl-1">
            In the gallery widget more photos can be added by clicking the "add image" button
          </li>
          <li className="pl-1">
            All the components should be responsive (for laptop screens; everything above 768px width)
          </li>
          <li className="pl-1">
            Replicate the exact UI; with exact padding, margins, shadows, interactions (if any)
          </li>
          <li className="pl-1">
            Ensure that the two widgets are accurately aligned with each other (relative right, left padding)
          </li>
          <li className="pl-1">
            Submit the following:
            <ol className="list-[lower-alpha] list-inside ml-5 mt-2 space-y-1.5">
              <li>
                Live Assignment Link – Host the assignment on any platform (e.g., Vercel, Netlify, Render, etc.) 
                and share the live URL.
              </li>
              <li>
                Public GitHub Repository Link – Provide the link to your public GitHub repository containing 
                the assignment code.
              </li>
            </ol>
          </li>
        </ol>
        
        <p className="pt-3 text-xs">
          <strong>NOTE:</strong> Recreate all interactions and effects visible in the prototype preview 
          (accessible by clicking the Play button at the top right in Figma).
        </p>
      </div>
    </Card>
  );
}
