import { animate, keyframes, style, transition, trigger, animation, useAnimation, } from '@angular/animations';
export function fadeInAnimation() {
    return trigger('fadeIn', [
        transition('0 => 1', [
            useAnimation(animation([
                animate('500ms 0ms', keyframes([style({ opacity: 0, offset: 0 }), style({ opacity: 1, offset: 1 })])),
            ], {
                delay: 0,
            })),
        ]),
    ]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5hbmltYXRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbWRiLWFuZ3VsYXItdWkta2l0L3RhYnMvdGFicy5hbmltYXRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxPQUFPLEVBRVAsU0FBUyxFQUNULEtBQUssRUFDTCxVQUFVLEVBQ1YsT0FBTyxFQUNQLFNBQVMsRUFDVCxZQUFZLEdBQ2IsTUFBTSxxQkFBcUIsQ0FBQztBQUU3QixNQUFNLFVBQVUsZUFBZTtJQUM3QixPQUFPLE9BQU8sQ0FBQyxRQUFRLEVBQUU7UUFDdkIsVUFBVSxDQUFDLFFBQVEsRUFBRTtZQUNuQixZQUFZLENBQ1YsU0FBUyxDQUNQO2dCQUNFLE9BQU8sQ0FDTCxXQUFXLEVBQ1gsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FDaEY7YUFDRixFQUNEO2dCQUNFLEtBQUssRUFBRSxDQUFDO2FBQ1QsQ0FDRixDQUNGO1NBQ0YsQ0FBQztLQUNILENBQUMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBhbmltYXRlLFxuICBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEsXG4gIGtleWZyYW1lcyxcbiAgc3R5bGUsXG4gIHRyYW5zaXRpb24sXG4gIHRyaWdnZXIsXG4gIGFuaW1hdGlvbixcbiAgdXNlQW5pbWF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuZXhwb3J0IGZ1bmN0aW9uIGZhZGVJbkFuaW1hdGlvbigpOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEge1xuICByZXR1cm4gdHJpZ2dlcignZmFkZUluJywgW1xuICAgIHRyYW5zaXRpb24oJzAgPT4gMScsIFtcbiAgICAgIHVzZUFuaW1hdGlvbihcbiAgICAgICAgYW5pbWF0aW9uKFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIGFuaW1hdGUoXG4gICAgICAgICAgICAgICc1MDBtcyAwbXMnLFxuICAgICAgICAgICAgICBrZXlmcmFtZXMoW3N0eWxlKHsgb3BhY2l0eTogMCwgb2Zmc2V0OiAwIH0pLCBzdHlsZSh7IG9wYWNpdHk6IDEsIG9mZnNldDogMSB9KV0pXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICApLFxuICAgIF0pLFxuICBdKTtcbn1cbiJdfQ==