import StudentAssignment from "../../components/ui/StudentAssignment";

export default function ReviewList() {
  return (
    <div className="flex flex-col gap-4 w-full mt-10">
      <StudentAssignment
        params={{
          content: "Test Student",
          date: "18.02.2025 00:00 AM",
          grade: "-/10",
        }}
      />
    </div>
  );
}
