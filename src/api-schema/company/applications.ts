import { Integer } from "@/api-schema/common-types";
import { Selection, Structure } from "@/api-schema/schema.types";
import { applicationsSchema, applicationsStructure, buildApplicationStructure, statusEnum } from "@/api-schema/shared/applications";

const statsStructure: Structure = {
    id: "stats",
    name: "Stats",
    schema: {
        intelligence: { type: Integer },
        endurance: { type: Integer },
        manual_labor: { type: Integer },
    },
};

const structures = [applicationsStructure, buildApplicationStructure(statsStructure), statsStructure, statusEnum];

const ApplicationsSelection: Selection = {
    name: "applications",
    description: "List company applications. Only available for directors.",
    access: "limited",
    schema: applicationsSchema,
    structures,
    id: { optional: false },
};

export default ApplicationsSelection;
