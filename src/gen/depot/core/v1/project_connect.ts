// @generated by protoc-gen-connect-es v0.13.1 with parameter "target=ts"
// @generated from file depot/core/v1/project.proto (package depot.core.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import {MethodKind} from '@bufbuild/protobuf'
import {
  CreateProjectRequest,
  CreateProjectResponse,
  DeleteProjectRequest,
  DeleteProjectResponse,
  GetProjectRequest,
  GetProjectResponse,
  ListProjectsRequest,
  ListProjectsResponse,
  UpdateProjectRequest,
  UpdateProjectResponse,
} from './project_pb.js'

/**
 * @generated from service depot.core.v1.ProjectService
 */
export const ProjectService = {
  typeName: 'depot.core.v1.ProjectService',
  methods: {
    /**
     * List all projects
     *
     * @generated from rpc depot.core.v1.ProjectService.ListProjects
     */
    listProjects: {
      name: 'ListProjects',
      I: ListProjectsRequest,
      O: ListProjectsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Get a project
     *
     * @generated from rpc depot.core.v1.ProjectService.GetProject
     */
    getProject: {
      name: 'GetProject',
      I: GetProjectRequest,
      O: GetProjectResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Create a new project
     *
     * @generated from rpc depot.core.v1.ProjectService.CreateProject
     */
    createProject: {
      name: 'CreateProject',
      I: CreateProjectRequest,
      O: CreateProjectResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Update a project
     *
     * @generated from rpc depot.core.v1.ProjectService.UpdateProject
     */
    updateProject: {
      name: 'UpdateProject',
      I: UpdateProjectRequest,
      O: UpdateProjectResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Delete a project
     *
     * @generated from rpc depot.core.v1.ProjectService.DeleteProject
     */
    deleteProject: {
      name: 'DeleteProject',
      I: DeleteProjectRequest,
      O: DeleteProjectResponse,
      kind: MethodKind.Unary,
    },
  },
} as const
