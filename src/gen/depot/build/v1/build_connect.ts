// @generated by protoc-gen-connect-es v1.4.0 with parameter "target=ts"
// @generated from file depot/build/v1/build.proto (package depot.build.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import {MethodKind} from '@bufbuild/protobuf'
import {CreateBuildRequest, CreateBuildResponse, FinishBuildRequest, FinishBuildResponse} from './build_pb.js'

/**
 * @generated from service depot.build.v1.BuildService
 */
export const BuildService = {
  typeName: 'depot.build.v1.BuildService',
  methods: {
    /**
     * @generated from rpc depot.build.v1.BuildService.CreateBuild
     */
    createBuild: {
      name: 'CreateBuild',
      I: CreateBuildRequest,
      O: CreateBuildResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc depot.build.v1.BuildService.FinishBuild
     */
    finishBuild: {
      name: 'FinishBuild',
      I: FinishBuildRequest,
      O: FinishBuildResponse,
      kind: MethodKind.Unary,
    },
  },
} as const
