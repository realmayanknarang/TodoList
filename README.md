# TodoList

A simple full-stack Todo application built with the MERN-style stack (MongoDB, Express, React, Node.js).

Add, edit, search, and manage tasks with a clean full-stack interface.

## Features

- Add tasks with a title and description
- View all tasks in a paginated list
- Edit and update existing tasks
- Mark tasks as complete / incomplete
- Delete tasks
- Search tasks by title or description
- Form validation and error messages
- Fast, lightweight React frontend built with Vite

## Tech Stack

**Frontend**
- React 19
- React Router DOM
- Vite

**Backend**
- Node.js
- Express 5
- MongoDB (via the official `mongodb` driver)
- CORS
- dotenv

## Project Structure

```

TATVA-Forensic-Investigation/
│
├── backend/
│   │
│   ├── main.py
│   ├── requirements.txt
│   ├── .env.example
│   ├── Dockerfile
│   │
│   ├── api/
│   │   ├── cases.py
│   │   ├── evidence.py
│   │   ├── entities.py
│   │   ├── graph.py
│   │   ├── analysis.py
│   │   ├── anomalies.py
│   │   ├── entity_resolution.py
│   │   ├── reports.py
│   │   └── model_management.py
│   │
│   ├── core/
│   │   ├── config.py
│   │   ├── security.py
│   │   ├── logging_config.py
│   │   ├── exceptions.py
│   │   └── audit.py
│   │
│   ├── schemas/
│   │   ├── case.py
│   │   ├── evidence.py
│   │   ├── entity.py
│   │   ├── relationship.py
│   │   ├── anomaly.py
│   │   ├── prediction.py
│   │   └── report.py
│   │
│   ├── uploads/
│   │   ├── .gitkeep
│   │   └── README.md
│   │
│   ├── preprocessor/
│   │   ├── cdr_parser.py
│   │   ├── bank_parser.py
│   │   ├── gps_parser.py
│   │   ├── email_parser.py
│   │   ├── fir_parser.py
│   │   ├── normalization.py
│   │   ├── validation.py
│   │   └── timestamps.py
│   │
│   ├── extraction/
│   │   ├── spacy_extractor.py
│   │   ├── gemini_extractor.py
│   │   ├── entity_extractor.py
│   │   ├── relation_extractor.py
│   │   └── schema_mapper.py
│   │
│   ├── Graph_Integration_Layer/
│   │   ├── candidate_generation.py
│   │   ├── entity_resolution.py
│   │   ├── canonical_entities.py
│   │   ├── record_linkage.py
│   │   ├── merge_policy.py
│   │   └── provenance.py
│   │
│   ├── ml/
│   │   ├── README.md
│   │   ├── config.py
│   │   │
│   │   ├── data/
│   │   │   ├── load_dataset.py
│   │   │   ├── validate_dataset.py
│   │   │   ├── label_pairs.py
│   │   │   ├── split_dataset.py
│   │   │   └── data_dictionary.md
│   │   │
│   │   ├── features/
│   │   │   ├── entity_features.py
│   │   │   ├── string_features.py
│   │   │   ├── transaction_features.py
│   │   │   ├── temporal_features.py
│   │   │   └── graph_features.py
│   │   │
│   │   ├── entity_resolution/
│   │   │   ├── baseline_rules.py
│   │   │   ├── rapidfuzz_matcher.py
│   │   │   ├── tfidf_matcher.py
│   │   │   ├── train_catboost.py
│   │   │   ├── predict_matches.py
│   │   │   ├── match_thresholds.py
│   │   │   └── evaluate_matching.py
│   │   │
│   │   ├── anomaly_detection/
│   │   │   ├── transaction_features.py
│   │   │   ├── train_isolation_forest.py
│   │   │   ├── predict_anomalies.py
│   │   │   ├── anomaly_rules.py
│   │   │   └── evaluate_anomalies.py
│   │   │
│   │   ├── transaction_classification/
│   │   │   ├── train_classifier.py
│   │   │   ├── predict_transactions.py
│   │   │   └── evaluate_classifier.py
│   │   │
│   │   ├── graph_ml/
│   │   │   ├── graph_embeddings.py
│   │   │   ├── link_prediction.py
│   │   │   └── README.md
│   │   │
│   │   ├── explainability/
│   │   │   ├── shap_explainer.py
│   │   │   ├── match_explanations.py
│   │   │   └── anomaly_explanations.py
│   │   │
│   │   ├── evaluation/
│   │   │   ├── metrics.py
│   │   │   ├── error_analysis.py
│   │   │   ├── threshold_analysis.py
│   │   │   └── evaluation_report.py
│   │   │
│   │   └── registry/
│   │       ├── model_registry.py
│   │       └── model_metadata.py
│   │
│   ├── analysis/
│   │   ├── graph_summary.py
│   │   ├── centrality.py
│   │   ├── path_analysis.py
│   │   ├── cycle_detection.py
│   │   ├── temporal_analysis.py
│   │   ├── pattern_detection.py
│   │   └── risk_aggregation.py
│   │
│   ├── risk_engine/
│   │   ├── feature_aggregation.py
│   │   ├── prioritization_score.py
│   │   ├── confidence.py
│   │   ├── evidence_explanations.py
│   │   └── review_policy.py
│   │
│   ├── db/
│   │   ├── neo4j_client.py
│   │   ├── postgres_client.py
│   │   ├── graph_queries.py
│   │   └── repositories.py
│   │
│   ├── db_helper/
│   │   ├── cypher_mapper.py
│   │   └── graph_adapters.py
│   │
│   ├── Gemini_Engine/
│   │   ├── narrative_generator.py
│   │   ├── prompt_templates.py
│   │   └── report_summarizer.py
│   │
│   ├── insights/
│   │   ├── insight_service.py
│   │   ├── cache.py
│   │   └── insight_schemas.py
│   │
│   ├── reports/
│   │   ├── report_builder.py
│   │   ├── evidence_references.py
│   │   └── export_service.py
│   │
│   ├── services/
│   │   ├── case_service.py
│   │   ├── evidence_service.py
│   │   ├── graph_service.py
│   │   ├── ml_service.py
│   │   └── investigation_service.py
│   │
│   └── tests/
│       ├── test_preprocessor.py
│       ├── test_entity_resolution.py
│       ├── test_graph_integration.py
│       ├── test_graph_analysis.py
│       ├── test_anomaly_detection.py
│       ├── test_risk_engine.py
│       └── test_api.py
│
├── frontend/
│   ├── package.json
│   ├── src/
│   │   ├── components/
│   │   │   ├── ForceGraphViewer.tsx
│   │   │   ├── EntityDetails.tsx
│   │   │   ├── EvidenceViewer.tsx
│   │   │   ├── AnomalyPanel.tsx
│   │   │   ├── MatchReviewPanel.tsx
│   │   │   ├── RiskExplanation.tsx
│   │   │   └── PDFExportModal.tsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Dashboard.tsx
│   │   │   ├── CaseFiles.tsx
│   │   │   ├── CaseDetails.tsx
│   │   │   ├── GraphExplorer.tsx
│   │   │   ├── Timeline.tsx
│   │   │   ├── AnomalyReview.tsx
│   │   │   └── ModelEvaluation.tsx
│   │   │
│   │   ├── hooks/
│   │   ├── services/
│   │   │   ├── api.ts
│   │   │   ├── graphApi.ts
│   │   │   └── mlApi.ts
│   │   │
│   │   ├── types/
│   │   │   ├── case.ts
│   │   │   ├── graph.ts
│   │   │   ├── evidence.ts
│   │   │   └── prediction.ts
│   │   │
│   │   └── utils/
│   │       ├── graphFormatting.ts
│   │       └── reportExport.ts
│   │
│   └── public/
│
├── ml_workspace/
│   ├── notebooks/
│   │   ├── 01_dataset_exploration.ipynb
│   │   ├── 02_entity_matching_baseline.ipynb
│   │   ├── 03_catboost_experiments.ipynb
│   │   └── 04_anomaly_detection.ipynb
│   │
│   ├── datasets/
│   │   ├── README.md
│   │   ├── raw/
│   │   ├── processed/
│   │   └── labels/
│   │
│   └── experiments/
│       └── README.md
│
├── model_artifacts/
│   ├── README.md
│   └── .gitkeep
│
├── scripts/
│   ├── train_entity_model.py
│   ├── train_anomaly_model.py
│   ├── evaluate_models.py
│   └── run_pipeline.py
│
├── docs/
│   ├── architecture.md
│   ├── end_to_end_data_flow.md
│   ├── ml_pipeline.md
│   ├── api_documentation.md
│   ├── model_card.md
│   └── evaluation_results.md
│
├── tests/
│   └── integration/
│       ├── test_full_pipeline.py
│       └── test_evidence_provenance.py
│
├── .gitignore
├── docker-compose.yml
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm
- MongoDB (local or Atlas)

### 1. Clone the repo

```bash
git clone https://github.com/realmayanknarang/TodoList.git
cd TodoList/todomern
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder and add your MongoDB URI:

```
MONGO_URI=your_mongodb_connection_string
```

Start the backend server:

```bash
npm run dev
```

The server will run on `http://localhost:3200`.

### 3. Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on `http://localhost:5173` (default Vite port).

## API Endpoints

| Method | Endpoint      | Description        |
|--------|---------------|--------------------|
| GET    | `/tasks?q=&page=&limit=` | Get tasks (search + pagination) |
| POST   | `/add-task`   | Add a new task       |
| PUT    | `/toggle/:id` | Toggle task completed |
| PUT    | `/update/:id` | Update a task by ID   |
| DELETE | `/delete/:id` | Delete a task by ID   |

## Author

**Mayank Narang**

## License

This project is licensed under the ISC License.

